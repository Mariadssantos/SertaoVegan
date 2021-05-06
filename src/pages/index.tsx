import Link from "next/link";

import { GetStaticProps } from "next";
import { api } from "../../Services/api";
import ContentFooter from "../Components/Footer";
import ContentHeader from "../Components/Header";

type Receita = {
  id: string;
  title: string;
  times: string;
  image: string;
  porcoes: number;
  descriptioningredientes: string;
  descriptionpreparo: string;
};

type HomeProps = {
  allReceitas: Receita[];
};

export default function Home({ allReceitas }: HomeProps) {
  const receitaList = [...allReceitas];
  return (
    <div>
      <div className="container">
        <ContentHeader />
        {/* quando importa um componente ele vem como se fosse uma tag */}
        <div className="content">
          {allReceitas.map((receita) => (
              <Link href='/Receitas/[slug]' as={`/Receitas/${receita.id}`}>
            <div className="card-container" key={receita.id}>
                <div className="image">
                  <img src={receita.image} alt="Imagem" />
                </div>
                <div className="title">
                  <h1>{receita.title} </h1>
                </div>
            </div>
              </Link>
          ))}
        </div>
        <ContentFooter />
      </div>
    </div>
  );
}
// pegando as propriedades do server json
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("Receitas", {
    params: {
      _Limit: 4,
      _sort: "id",
    },
  });
  const receitas = data.map((receita) => {
    return {
      id: receita.id,
      title: receita.title,
      image: receita.image,
      times: receita.times,
      porcoes: receita.porcoes,
      descriptioningredientes: receita.descriptioningredientes,
      descriptionpreparo: receita.descriptionpreparo,
    };
  });

  const allReceitas = receitas;

  return {
    props: {
      allReceitas,
    },

    revalidate: 60 * 60 * 8,
  };
};

// export default function seila(){
//SPA - AO USAR SPA TEM QUE DEFINIR OS CARDS COM KEY ID E O EFEITO VAI SER TROCAR O CONTEÚDO PARA AS INFORMAÇÕES NA API REFERENTE AQULE CARD
//   useEffect(() => {
//   fetch('Receitas')
//  .then(response => response.json())
// .then(Receita => console.log(Receitas))

// }, [])
// return(
//   <h1>index</h1>
// )
// }

// export async function getServerSideProps() {
//   // SSR
//   const response = await fetch('Receitas') //fetch permite acessar e manipular os dados da api
//   const Receita =  await response.json() // tentei ts mas só foi json... pq se meu arquivo é ts?

//   return{
//     props: {
//       Receitas: Receita,
//     }
//   }

// }
