import React from 'react';


// const AdviceContent = (props) => {
//   const { id, message } = props;
//   return (
//     <>
//       <AdviceNumberContainer>{`ADVICE ${id}`}</AdviceNumberContainer>
//       <AdviceTextContent>{`"${message}"`}</AdviceTextContent>
//       <PatternDivider
//         src={LineBreak}
//         alt='line break'
//       />
//     </>
//   );
// };


const AdviceContent = (props) => {
    const { id, message} = props;
    <div>
        <h3 className="advice">{`ADVICE ${id}`}</h3>

        <p className="content">{`"${message}"`}</p>
    </div>
}