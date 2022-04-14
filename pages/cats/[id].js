import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useRouter } from "next/router";
import Head from "next/head" ;

const Cat = () => {
  const router = useRouter();
  const [cat, setCat] = useState(null);
  const { id } = router.query;
  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${Number(id)}`);
    const data = await response.json();
    setCat(data);
  };
  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <>
    <Head>
      <title>Cats | { cat && cat.name}</title>
      <link rel="icon" href={cat && cat.image.url} />
    </Head>
      <DefaultLayout>
        <div className="container">
          {cat && (
            <div
              className="card mb-3 mx-auto mt-5"
              style={{ maxWidth: "80%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={cat.image.url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body bg-light">
                    <h5 className="card-title">{cat.name}</h5>
                    <p className="card-text text-muted">
                      {cat.description}
                    </p>
                    <h6>Email: {cat.email}</h6>
                    <h6>Phone: {cat.phone}</h6>
                    <h6>Color: {cat.color}</h6>
                    <h6>Gender: {cat.gender}</h6>

                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="text-center my-5">
            <button
              className="btn btn-danger"
              onClick={() => router.push("/cats")}
            >
              Check other propositions
            </button>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Cat;
