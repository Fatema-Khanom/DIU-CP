// // DsaResource.jsx

// import React, { useState, useEffect } from 'react';

// const DsaResource = ({ jsonDataUrl }) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     // Fetch data from the specified JSON file
//     const fetchData = async () => {
//       try {
//         const response = await fetch(jsonDataUrl);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [jsonDataUrl]);

//   return (
//     <div>
//       <h2>Resource Explorer</h2>
//       <ul>
//         {Object.entries(data).map(([folder, folderInfo]) => (
//           <li key={folder}>
//             <strong>{folder}</strong>
//             <ul>
//               <li>
//                 {/* <a href={folderInfo.folder_url} target="_blank" rel="noopener noreferrer">
//                   Folder Link
//                 </a> */}
//               </li>
//               {Object.entries(folderInfo).map(([file, fileLink], index) => (
//                 index > 0 && (
//                   <li key={file}>
//                     <a href={fileLink} target="_blank" rel="noopener noreferrer">
//                       {file}
//                     </a>
//                   </li>
//                 )
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DsaResource;


// DsaResource.jsx

// import React, { useState, useEffect } from 'react';

// const DsaResource = ({ jsonDataUrl }) => {
//   const [data, setData] = useState({});
//   const [selectedFolder, setSelectedFolder] = useState(null);

//   useEffect(() => {
//     // Fetch data from the specified JSON file
//     const fetchData = async () => {
//       try {
//         const response = await fetch(jsonDataUrl);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [jsonDataUrl]);

//   const handleFolderClick = (folder) => {
//     setSelectedFolder(selectedFolder === folder ? null : folder);
//   };

//   return (
//     <div>
//       <h2>Resource Explorer</h2>
//       <ol>
//         {Object.entries(data).map(([folder, folderInfo]) => (
//           <li key={folder}>
//             <strong style={{ cursor: 'pointer' }} onClick={() => handleFolderClick(folder)}>
//               {folder}
//             </strong>
//             {selectedFolder === folder && (
//               <ul>
//                 {Object.entries(folderInfo).map(([file, fileLink], index) => (
//                   index > 0 && (
//                     <li key={file}>
//                       <a href={fileLink} target="_blank" rel="noopener noreferrer">
//                         {file}
//                       </a>
//                     </li>
//                   )
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default DsaResource;

// DsaResource.jsx

import React, { useState, useEffect } from 'react';

const DsaResource = ({ jsonDataUrl }) => {
  const [data, setData] = useState({});
  const [selectedFolder, setSelectedFolder] = useState(null);

  useEffect(() => {
    // Fetch data from the specified JSON file
    const fetchData = async () => {
      try {
        const response = await fetch(jsonDataUrl);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [jsonDataUrl]);

  const handleFolderClick = (folder) => {
    setSelectedFolder(selectedFolder === folder ? null : folder);
  };

  return (
    <div className="pt-12 lg:pt-20 px-12 lg:px-0">
      <h2 className="pb-8 text-[18px]">Step into a dynamic community where algorithms take center stage. Our resource hub is crafted to bring together programmers, developers, and algorithm enthusiasts in a collaborative space dedicated to the exploration and mastery of algorithms.

                    Uncover the intricacies of algorithmic thinking, share insights, and connect with like-minded individuals on a journey to enhance computational skills and problem-solving expertise.And here is our algorithm git resource:</h2>
        <ol className="pl-12">
        {Object.entries(data).map(([folder, folderInfo], index) => (
            <li key={folder}>
            <span
                
                className="cursor-pointer font-bold hover:text-blue-500"
                onClick={() => handleFolderClick(folder)}
            >
                {`${index + 1}. ${folder}`}
            </span>
            {selectedFolder === folder && (
                <ul className='pl-12 bg- shadow-drop-md underline' style={{ listStyleType: 'disc' }}>
                {Object.entries(folderInfo).map(([file, fileLink], fileIndex) => (
                    fileIndex > 0 && (
                    <li key={file} className="text-blue-700">
                        <a href={fileLink} target="_blank" rel="noopener noreferrer">
                        {file}
                        </a>
                    </li>
                    )
                ))}
                </ul>
            )}
            </li>
        ))}
        </ol>

    </div>
  );
};

export default DsaResource;

