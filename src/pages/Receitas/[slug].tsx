import { GetStaticPaths, GetStaticProps } from "next";
// import { useRouter } from "next/router";
import Head from "next/head";

import ContentFooter from "../../Components/Footer";
import ContentHeader from "../../Components/Header";

// import Link from "next/link";
import { api } from "../../../Services/api";

import styles from "./content.module.scss";

type Receita = {
  id: string;
  title: string;
  times: string;
  image: string;
  porcoes: number;
  descriptioningredientes: {
    ingrediente1: string;
    ingrediente2: string;
    ingrediente3: string;
    ingrediente4: string;
    ingrediente5: string;
    ingrediente6: string;
    ingrediente7: string;
    ingrediente8: string;
    ingrediente9: string;
    ingrediente10: string;
    ingrediente11: string;
    ingrediente12: string;
    ingrediente13: string;
    ingrediente14: string;
    ingrediente15: string;
    ingrediente16: string;
    ingrediente17: string;
    ingrediente18: string;
  };
  descriptionpreparo: string;
};
type ReceitaProps = {
  receita: Receita;
};

export default function Receita({ receita }: ReceitaProps) {
  <Head>{/* <title> SV | {receita.title} </title> */}</Head>;
  // é da parte de cima no caso da abinha

  return (
    <div>
      <ContentHeader />

      <div className={styles.title}>
        <h2>{receita.title}</h2>
      </div>

      <div className={styles.detalhes}>
        <div>
          <h3>Tempo de Preparo: {receita.times}</h3>
        </div>
        <div>
          <h3>Porções: {receita.porcoes}</h3>
        </div>
      </div>

      <div className={styles.containerContent}>
        <div className={styles.image}>
          <img src={receita.image} alt="Imagem" />
        </div>
        <div className={styles.ContentEnd}>
          <div className={styles.ingredientes}>
            <h3>Ingredientes</h3>
            <h4>{receita.descriptioningredientes.ingrediente1}</h4>
            <h4>{receita.descriptioningredientes.ingrediente2}</h4>
            <h4>{receita.descriptioningredientes.ingrediente3}</h4>
            <h4>{receita.descriptioningredientes.ingrediente4}</h4>
            <h4>{receita.descriptioningredientes.ingrediente5}</h4>
            <h4>{receita.descriptioningredientes.ingrediente6}</h4>
            <h4>{receita.descriptioningredientes.ingrediente7}</h4>
            <h4>{receita.descriptioningredientes.ingrediente8}</h4>
            <h4>{receita.descriptioningredientes.ingrediente9}</h4>
            <h4>{receita.descriptioningredientes.ingrediente10}</h4>
            <h4>{receita.descriptioningredientes.ingrediente11}</h4>
            <h4>{receita.descriptioningredientes.ingrediente12}</h4>
            <h4>{receita.descriptioningredientes.ingrediente13}</h4>
            <h4>{receita.descriptioningredientes.ingrediente14}</h4>
            <h4>{receita.descriptioningredientes.ingrediente15}</h4>
            <h4>{receita.descriptioningredientes.ingrediente16}</h4>
            <h4>{receita.descriptioningredientes.ingrediente17}</h4>
            <h4>{receita.descriptioningredientes.ingrediente18}</h4>
          </div>

          <div className={styles.preparo}>
            <h3>Modo de Preparo</h3>
            <h4>{receita.descriptionpreparo}</h4>
          </div>
        </div>
      </div>
      <ContentFooter />
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
    descriptioningredientes: data.descriptioningredientes,
    descriptionpreparo: data.descriptionpreparo,
  };

  return {
    props: {
      receita,
    },
    revalidate: 60 * 60 * 24, //24hrs
  };
};
