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
                <Link href={`/n/${g.group_seo}`}>
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
            width: 20%;
            height: 200px;
            margin-bottom: 20px;
            margin-left:15px;
            background-color: #fff;
            display: flex;
            flex-direction:column;
            background:var(--main-red-color);
          }
          .group-card a {
            display: block;
            position: relative;
            top: 35%;
            transform: translateY(-50%);
            text-align:center;
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
            margin: 60px 0 10px;
            font-weight: bolder;
          }
          h2.group-name > a {
            color: #fff;
          }
          @media screen and (max-width: 850px) {
            .group-container {
              flex-direction: column;
              margin-top:15px;
            }
            .group-card {
              width: 90%;
              margin-left:0;
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
