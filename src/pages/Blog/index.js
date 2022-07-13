import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.PNG";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.PNG";
import blog6 from "../../assets/blog6.PNG";
import blog7 from "../../assets/blog7.PNG";

import { Card, Container, ContainerPost, Post } from "./style";
import NavBar from "../../components/NavBar";

const Blog = () => {
  const postBlog = [
    {
      img: blog4,
      title:
        "PNUMA e FAO convocam movimento no Brasil para reduzir perdas e desperdícios de alimentos",
      description:
        " Brasília, 30 de setembro de 2021 – O Dia Internacional de Conscientização sobre Perdas e Desperdícios de Alimentos foi celebrado pelo segundo ano consecutivo nesta quarta-feira (29). No Brasil, o Programa das Nações Unidas para o Meio Ambiente (PNUMA) e a Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) realizaram uma campanha digital de sensibilização e ações em conjunto com governos estaduais e municipais em várias regiões do país.",
      id: 1,
    },
    {
      img: blog2,
      title:
        "Brasil desperdiça cerca de 27 milhões de toneladas de alimentos por ano",
      description:
        "Um levantamento da ONU mostra que o Brasil desperdiça por ano cerca de 27 milhões de toneladas de alimentos. Estima-se que 80% desse desperdício acontece no manuseio, transporte e centrais de abastecimento. Uma pesquisa da ONU também revela que 60% dos alimentos jogados fora vêm do consumo de famílias. Só na Região Metropolitana do Rio de Janeiro são produzidas quase 17 mil toneladas de lixo por dia.Do lado oposto ao desperdício, milhares de famílias não têm o que comer.",
      id: 2,
    },
    {
      img: blog3,
      title:
        "Comida desperdiçada no Brasil poderia alimentar 12 milhões de pessoas",
      description:
        "Enquanto cerca de 19 milhões de brasileiros estão passando fome, o desperdício de comida no país poderia alimentar 12 milhões de pessoas por ano. Estes são dados de dois estudos publicados em 2021 pela Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede Penssan) e pelo Programa das Nações Unidas para o Meio Ambiente. E mostram que o desperdício de alimentos é um grave problema ambiental e social que precisamos combater com urgência.",
      id: 3,
    },
    {
      img: blog5,
      title: "O que o Brasil está fazendo contra o desperdício de alimentos",
      description:
        "o Governo Federal lançou em 2018 a “Semana Nacional de Conscientização da Perda e Desperdício de Alimentos”, para educar a população sobre a importância de combater o desperdício em todas as etapas do processo de produção e no consumo.Essa iniciativa tem estimulado os governos locais a criarem programas e metas com foco no combate ao desperdício e à fome.Além disso, ONGs e instituições privadas têm reunido esforços para implementar ações de conscientização da população.",
      id: 4,
    },
    {
      img: blog7,
      title:
        "Arroz e feijão estão entre os alimentos mais desperdiçados no Brasil",
      description:
        "Base da alimentação do brasileiro, o arroz e o feijão representam 38% do montante de alimentos jogado fora no país. O dado faz parte da pesquisa sobre hábitos de consumo e desperdício de alimentos, do projeto Diálogos Setoriais União Europeia – Brasil, liderado pela Empresa Brasileira de Pesquisa Agropecuária (Embrapa) com apoio da Fundação Getulio Vargas (FGV).",
      id: 5,
    },
    {
      img: blog6,
      title: "Modos de reutilizar cascas e talos em receitas",
      description:
        "As cascas e talos de verduras, legumes e frutas podem fazer parte de receitas deliciosas e supernutritivas. Afinal, esses componentes concentram muitas fibras, vitaminas e minerais. Então, ao consumi-los, além de ter um aproveitamento integral dos vegetais, você acrescenta mais nutrientes a sua alimentação! Uma dica bacana é congelar as cascas e os talos, já higienizados, conforme vai consumindo os vegetais. Então, quando tiver uma quantidade boa desses ingredientes.",
      id: 6,
    },
  ];
  return (
    <Container>
      <NavBar />
      <h1>Blog</h1>
      <ContainerPost>
        <Post>
          {postBlog.map((post) => (
            <Card key={post.id}>
              <div className="Image">
                <img src={post.img} alt={post.title} />
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </Card>
          ))}
        </Post>
      </ContainerPost>
    </Container>
  );
};

export default Blog;
