import React from 'react';

const Blog = () => {
    return (
        <div className="w-11/12  mx-auto py-28 px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contributing to Code Park: Join Our Coding Community</h1>
            <p className="text-lg mb-4">Greetings Code Park enthusiasts! Become a valued member of our Code Park family by contributing. Your support not only adds you to our community but also fuels the spread of knowledge! Before you embark on your coding journey, take a moment to review the guidelines below to ensure a smooth and collaborative experience.</p>

            <h2 className="text-2xl font-bold my-4">Table of Contents</h2>
            <ul className="list-disc pl-6">
                <li className="mb-1">General Guidelines</li>
                <li className="mb-1">Structure</li>
                <li className="mb-1">Code Placement</li>
                <li className="mb-1">Coding Style</li>
                <li className="mb-1">Submitting Contributions</li>
            </ul>

            <h2 className="text-2xl font-bold my-4">General Guidelines</h2>
            <ol className="list-decimal pl-6">
                <li className="mb-2">Be Respectful:</li>
                <ul className="list-disc pl-8">
                    <li>Always be courteous and respectful towards other contributors. Encourage a positive and inclusive community.</li>
                </ul>
                <li className="mb-2">Avoid Binary and Executable Files:</li>
                <ul className="list-disc pl-8">
                    <li>Refrain from uploading any binary or executable files. The focus here is on clear and concise code implementations.</li>
                </ul>
                <li className="mb-2">Follow Code Etiquette:</li>
                <ul className="list-disc pl-8">
                    <li>Ensure that your code is well-commented for clarity. Follow the coding standards relevant to the language you are using.</li>
                </ul>
                <li className="mb-2">Restrictions:</li>
                <ul className="list-disc pl-8">
                    <li>Do not modify or remove any folder or file in this repository starting with (.) or all the letters are in uppercase. These are called admin files. Place a proper issue on GitHub if you want to suggest any modification here.</li>
                    <li>Currently, we are only accepting codes in [c, c++, py, java], which is best for raw code and DSA.</li>
                </ul>
                <li className="mb-2">Before Submission</li>
                <ul className="list-disc pl-8">
                    <li>Make sure you removed all unnecessary folders/files.</li>
                    <li>Run READY_REPO.py, which will check the status of your updates.</li>
                </ul>
                {/* ... Other list items ... */}
            </ol>

            {/* ... Rest of the content ... */}

            <h2 className="text-2xl font-bold my-4">Reasons for Direct Pull Request Rejection</h2>
            <ul className="list-disc pl-6">
                <li className="mb-2">Modify any admin folder/file (starts with . or all uppercase).</li>
                <li className="mb-2">Absence/inappropriate comments in the code.</li>
                <li className="mb-2">Did not follow code placement.</li>
                <li className="mb-2">Irrelevant commit message.</li>
            </ul>

            <h2 className="text-2xl font-bold my-4">Python Development</h2>
            <ul className="list-disc pl-6">
                <li className="mb-2">If you are using any virtual environment, make sure its name is one of ["venv", "virtual_env", "environment"].</li>
                {/* ... Other list items ... */}
            </ul>

            {/* ... Rest of the content ... */}

            <h2 className="text-2xl font-bold my-4">Structure</h2>
            <p className="text-lg mb-4">The repository is organized into folders based on different topics and programming languages. To maintain a structured and organized codebase, please adhere to the following guidelines:</p>

            {/* ... Rest of the content ... */}

            <h2 className="text-2xl font-bold my-4">Code Placement</h2>
            <p className="text-lg mb-4">If you want to contribute code on a specific topic and there is already an existing folder related to that topic, please follow these guidelines:</p>

            {/* ... Rest of the content ... */}

            <h2 className="text-2xl font-bold my-4">Coding Style</h2>
            <p className="text-lg mb-4">We believe that a coder is an artist, and we cannot teach an artist how to be creative. Therefore, feel free to write code as you wish. However, to reduce bugs and improve performance, please follow the rules below:</p>

            {/* ... Rest of the content ... */}

            <h2 className="text-2xl font-bold my-4">Submitting Contributions</h2>
            <p className="text-lg mb-4">Follow these steps to submit your contribution:</p>

            {/* ... Rest of the content ... */}

            <p className="text-lg mt-6">Thank you for contributing to Code Park! Your efforts help create a valuable resource for developers around the world. Happy coding!</p>
        </div>
    );
};

export default Blog;
