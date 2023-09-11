import A from "./A";
import Head from "next/head";

export default function MainContainer({children, keywords}){
    return(
        <>
            <Head>
                <meta keywords={"nextjs app" + keywords}/>
                <title>NextJs</title>
            </Head>
            <nav className="navbar">
                <A href="/" text="Главная" color="white"/>
                <A href="/users" text="Пользователи" color="white"/>
            </nav>
            <div className="body">
                {children}
            </div>
            <style>
                {`
                  .navbar {
                    background-color: #232323;
                    padding: 20px 50px;
                    display: flex;
                    gap: 30px;
                  }
                  .body{
                    padding: 20px 50px;
                  }
                `}
            </style>
        </>
    )
}