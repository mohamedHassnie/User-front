import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const UPLOAD_URL = "http://10.10.50.24:3017/analyse";
const chromfiles = [];
const userfiles = [];

function AjoutMultiple() {
  // protected Route
  const [files, setFiles] = useState([]);
  if (!localStorage.getItem("isAuthenticated")) {
    return <Navigate to="/login" />;
  } else {
    function onFileUpload(event) {
      event.preventDefault();
      // Get the file Id
      let id = event.target.id;

      for (const file of event.target.files) {
        if (id == 1) userfiles.push(file);
        if (id == 2) chromfiles.push(file);
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      for (const file of userfiles) {
        formData.append("userFile", file);
      }
      for (const file of chromfiles) {
        formData.append("chromosomeFile", file);
      }
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      axios
        .post(UPLOAD_URL, formData, config)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((err) => alert(err));
    };

    return (
      <div>
        <div className="ee">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-group files">
                <label>Upload Your File User </label>
                <input
                  type="file"
                  onChange={onFileUpload}
                  id={1}
                  accept="application/csv, .csv"
                  className="form-control"
                  multiple
                  required
                />

                <label>Upload Your File VCF </label>
                <input
                  type="file"
                  onChange={onFileUpload}
                  id={2}
                  accept="application/vcf, .vcf"
                  className="form-control"
                  multiple
                  required
                />
              </div>
              <div className="d-flex align-items-center flex-wrap justify-content-between">
                <input
                  id="envoyer"
                  type="submit"
                  className="btn btn-primary btn-style mt-4"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
export default AjoutMultiple;
