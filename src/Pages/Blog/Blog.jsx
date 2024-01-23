import React from 'react';

const Blog = () => {
    return (
        <div>
            {/* Your other blog content goes here */}
            
            {/* Embed the PDF using the embed tag */}
            <iframe
                title="PDF Viewer"
                style={{ width: '100%',}}
                src="../../assets/cp_blog_content.pdf"
                type="application/pdf"
            />
        </div>
    );
};

export default Blog;
