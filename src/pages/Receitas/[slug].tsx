import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { api } from "../../../Services/api";


type Receita = {
  id: string;
  title: string;
  times: string;
  image: string;
  porcoes: number;
  descriptioningredientes: {
      ingrediente1: string;
  };
  descriptionpreparo: string;
};
type ReceitaProps = {
  receita: Receita;
};


export default function Receita({ receita }: ReceitaProps) {

  <Head>
    <title> {receita.title} |  </title>
  </Head>;
  // é da parte de cima no caso da abinha

  return (
    <div>
        <h1>{receita.title}</h1>
        <h2>{receita.descriptioningredientes.ingrediente1}</h2>

    </div>
    
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get(`Receitas`, {
    params: {
      _sort: "id",
    },
  });

  const paths = data.map((receita) => {
    return {
      params: {
        slug: receita.id,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}; //  o getStaticPaths obgrigatório em toda rota que está usando geração estática e que possui parâmetros dinâmicos "[]"

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`/Receitas/${slug}`);

  const receita = {
    id: data.id,
    title: data.title,
    times: data.times,
    image: data.image,
    porcoes: data.porcoes,
    descriptioningredientes:data.descriptioningredientes,
    descriptionpreparo: data.descriptionpreparo
  }
    

  return {
    props: {
      receita,
    },
    revalidate: 60 * 60 * 24, //24hrs
  };
};
