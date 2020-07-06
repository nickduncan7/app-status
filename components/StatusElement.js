import React, { useState, useEffect } from "react";

const StatusElement = ({ url, name }) => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const httpRequest = new XMLHttpRequest();

    // Time out after 10 seconds, which should be more than reasonable
    // to test that a server is alive on a good connection.
    const statusTimer = setTimeout(function () {
      setStatus("error");
    }, 10 * 1000);

    const success = () => {
      clearTimeout(statusTimer);
      setStatus("good");
    };

    const error = () => {
      clearTimeout(statusTimer);
      setStatus("error");
    };

    // Status checking callback.
    // It will attempt to HTTP GET the root URL.
    // If that is not successful, it will try to load a favicon instead.
    // If neither of those checks are successful, it will report an "error" status.
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          success();
        } else {
          const img = document.createElement("img");
          img.onload = function () {
            success();
          };
          img.onerror = function () {
            error();
          };
          img.src = url + "/favicon.ico";
        }
      }
    };

    httpRequest.open("GET", url);
    httpRequest.send();
  }, []);

  return (
    <div className="status-row">
      <div className="flex-grow">
        <h3>{name}</h3>
        <a href={url} target="_blank" rel="_noopener">
          {url}
        </a>
      </div>
      <div className="flex-shrink">
        {status === "checking" ? (
          <span className="status checking">
            Checking status, please wait...
            <div className="icon" />{" "}
          </span>
        ) : status === "good" ? (
          <span className="status good">
            Operational
            <div className="icon" />{" "}
          </span>
        ) : (
          <span className="status error">
            Experiencing problems
            <div className="icon" />{" "}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatusElement;
