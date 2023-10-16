import React, { useState, useEffect } from 'react';

const History = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [activeButton, setActiveButton] = useState('FarmHistory'); // Default active button

  const fetchTransactionHistory = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTransactionData(data);
      } else {
        const errorData = await response.json();
        console.error('Error getting your history:', errorData);
        throw Error(errorData.message);
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    }
  };

  useEffect(() => {
    const apiUrl =
      activeButton === 'FarmHistory'
        ? 'https://btca.afribook.world/transaction/getUserTransactionHistory/ea02f715-37c0-4c27-95fb-3452e6cfb1f0'
        : 'https://btca.afribook.world/transaction/getWalletTransactionHistory/0xA258dDa230F78C51F202e893EE22e4845bFee5fF';

    fetchTransactionHistory(apiUrl);
  }, [activeButton]);

  return (
    <div className="wrapper bg-white py-2">
      <div className="container">
        <div className='flex gap-4'>
          <button
            onClick={() => setActiveButton('FarmHistory')}
            className={`btn ${activeButton === 'FarmHistory' ? 'bg-teal-500' : 'bg-gray-500'}`}
          >
            All Transaction History
          </button>
          <button
            onClick={() => setActiveButton('FrozenHistory')}
            className={`btn ${activeButton === 'FrozenHistory' ? 'bg-teal-500' : 'bg-gray-500'}`}
          >
            Frozen Transaction History
          </button>
        </div>

        {activeButton === 'FarmHistory' && (
          <TransactionSection title="All Transaction History" transactions={transactionData} />
        )}

        {activeButton === 'FrozenHistory' && (
          <TransactionSection title="Frozen Transaction History" transactions={transactionData} />
        )}

        {/* Other sections */}
      </div>
    </div>
  );
};

const TransactionSection = ({ title, transactions }) => (
  <div className="">
    <div className="box-border rounded-md bg-white shadow-lg">
      <div className="box-border gap-6 grid p-6">
        <div className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">
            {transactions.length > 0 ? (
              <TransactionList transactions={transactions} />
            ) : (
              <EmptyTransactionCard />
            )}
          </div>
          <div>
            <button className="btn bg-teal-500" onClick={() => window.location.href = '/my-wallet'}>
              Go to my Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TransactionList = ({ transactions }) => (
  <div className="box-border rounded-md bg-white shadow-md">
    <ul>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  </div>
);

const TransactionCard = ({ transaction }) => (
  <div className="box-border rounded-md bg-white shadow-md mb-20">
    <div className="box-border border-2 rounded-lg border-gray-300 dark:border-gray-600">
      <div className="card-body">
        <div className="amount text-2xl">{transaction.amount}</div>
        <div className="date">{transaction.date}</div>
      </div>
      <button className="btn bg-teal-500" onClick={() => window.location.href = '/my-wallet'}>
        Go to my Wallet
      </button>
    </div>
  </div>
);

const EmptyTransactionCard = () => (
  <div className="box-border rounded-md bg-white shadow-md">
    <p className="text-2xl text-center py-4">No transactions to display.</p>
  </div>
);

export default History;
