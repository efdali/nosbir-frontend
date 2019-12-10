import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Search from "../components/search";
import Image from "../components/image";
import http from "../utils/http";
import { withAuth } from "../utils/auth";
const Groups = ({ groups }) => {
  const [value, setValue] = useState("");

  React.useEffect(() => {
    if (groups.lenght <= 0) {
    }
    console.log("effect");
  }, []);

  return (
    <div className="content">
      <Head>
        <title>Tüm Gruplar</title>
      </Head>
      <Search value={value} onChange={e => setValue(e.target.value)} />

      <div className="group-container">
        {groups &&
          groups
            .filter(g => g.name.toLowerCase().includes(value))
            .map(g => (
              <div className="group-card" key={g.group_id}>
                <div className="left-img-container">
                  <Link href={g.group_seo}>
                    <a>
                      <Image
                        src={g.logo}
                        alt={g.name}
                        className="group-icon"
                        group={true}
                      />
                    </a>
                  </Link>
                  <h2 className="group-name">
                    <Link href={`/${g.group_seo}`}>
                      <a>{g.name}</a>
                    </Link>
                  </h2>
                </div>
                <div className="right-container">
                  <div>
                    <h5>Hakkında</h5>
                    <p className="group-summary">{g.summary}</p>
                  </div>
                  <div>
                    <h5>Kurallar</h5>
                    <p className="group-rules">{g.rules}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <style jsx>
        {`
          .content {
            flex: 1;
          }
          .group-container {
            width: 100%;
            margin: 40px auto 0;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
          }
          .group-card {
            width: 45%;
            height: 240px;
            margin-bottom: 20px;
            background-color: #fff;
            display: flex;
          }
          .left-img-container {
            flex-basis: 20%;
            padding: 6px;
            height: inherit;
            text-align: center;
            background-color: var(--main-red-color);
          }
          .left-img-container a{
            display:block;
            position:relative;
            top:35%;
            transform:translateY(-50%);
          }
          :global(.group-icon) {
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }
          h2.group-name {
            font-size: var(--big-font-size);
            text-align: center;
            font-family: Tekton-pro, sans-serif;
            margin: 40px 0 10px;
            font-weight: bolder;
          }
          h2.group-name > a {
            color: #fff;
          }
          .right-container {
            flex: 1;
            display: flex;
            padding: 5px;
            height: 240px;
            align-items: center;
            overflow: hidden;
          }
          .right-container > div {
            padding: 5px;
            width: 50%;
            height: inherit;
          }
          .right-container > div:first-child {
            border-right: 1px solid var(--main-gray-color);
          }
          .right-container > div:nth-child(2) {
            margin-left: 5px;
          }
          .right-container h5 {
            font-size: var(--normal-font-size);
            text-align: center;
            margin-bottom: 8px;
            font-family: Tekton-pro, sans-serif;
          }
          .right-container p {
            overflow: hidden;
            max-height: 200px;
          }
          .right-container p:hover {
            overflow-y: auto;
          }
          @media screen and (max-width: 850px) {
            .group-container {
              flex-direction: column;
            }
            .group-card {
              flex: 1;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};
export default withAuth(Groups);
Groups.getInitialProps = async ctx => {
  const groups = await http
    .get("tum_gruplar.php")
    .then(res => res.data)
    .then(res => res.gruplar);

  return { groups };
};
