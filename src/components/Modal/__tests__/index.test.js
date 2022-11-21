// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Modal from '..';

// const currentPhoto = {
//     name: 'Park bench',
//     category: 'landscape',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//     index: 1
// };

// afterEach(cleanup);

// describe('Click Event', () => {
//     it('calls onClose handler', () => {
//       const { getByText } = render(<Modal
//         onClose={mockToggleModal}
//         currentPhoto={currentPhoto}
//       />);
//       fireEvent.click(getByText('Close this modal'));
  
//       expect(mockToggleModal).toHaveBeenCalledTimes(1);
//     });