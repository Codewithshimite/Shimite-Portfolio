import "../styles/Dowloadcv.scss"

const FileDownload = () => {
  // Use a relative path to the PDF file
  const fileUrl = 'https://drive.google.com/file/d/1WY8BnE03FnMYLnJ2zCTXyKwEwbHrCTmQ/view?usp=sharing'; // Adjust the path as necessary

  return (
    <a href={fileUrl} download className="resume" target="_blank">
      Download My CV
      <i className="fa fa-download donwload-logo"></i>
    </a>
  );
};

export default FileDownload;