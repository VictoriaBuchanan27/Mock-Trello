// import React from 'react';
// import { DragSource } from 'react-dnd';
// import { ItemTypes } from './Constants';

// const cardSource = {
//   beginDrag(props) {
//     return {
//       cards: props.cards
//     };
//   }
// };


// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   };
// }

// function Card({ isDragging, connectDragSource, cards }) {
//   return connectDragSource(
//     <div style={{ opacity: isDragging ? 0.5 : 1 }}>
//       {cards}
//     </div>
//   );
// }

// export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);