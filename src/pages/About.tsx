import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function About() {
  return (
    <div className="text-center mt-5">
      <h1 className="pb-2">About</h1>
      <p>
        Hello! This is a working project to showcase a fully functioning
        <br />
        E-Commerce Website based on React, TypeScript, and Bootstrap.
      </p>
      <p>
        Created by{" "}
        <a
          href="https://freddavidsolisgutierrez.netlify.app/"
          target={"_blank"}
        >
          Fred David Solis Gutierrez
        </a>
      </p>
      You can check the Open Code for this app in{" "}
      <a
        href="https://github.com/fred-gutierrez/ecommerce-website"
        target={"_blank"}
      >
        <button type="button" className="btn btn-secondary">
          <FontAwesomeIcon icon={["fab", "github"]} size={"lg"} /> GitHub
        </button>
      </a>
    </div>
  );
}
