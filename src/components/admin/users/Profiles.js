import React from 'react'
import { Button, Modal } from 'flowbite-react';

const  UserProfile = ({ viewProfile, setViewProfile }) => {

  return (
      <div>
                     <Modal dismissible show={viewProfile} onClose={() => setViewProfile(false)}>
        <Modal.Header>profile</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        full name: <span>Johan Rodrigues</span>
                      </p>
                      
                       <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Role: <span>Franchisor</span>
            </p>
           
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='gray' onClick={() => setViewProfile(false)}>Ok</Button>
        </Modal.Footer>
      </Modal>
          
    </div>
  )
}

export default UserProfile