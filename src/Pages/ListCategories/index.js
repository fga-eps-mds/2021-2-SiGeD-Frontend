import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import {
  Main, Container, Title, Search, ContentBox, TableHeader,
  TableTitle, P, Bar, Header, Button,
} from './style';
import SearchInput from '../../Components/SearchInput';
import CategoriesData from '../../Components/CategoriesData';
import Modal from '../../Components/Modal';
import TinyButton from '../../Components/TinyButton';

const ListCategories = () => {
  const [word, setWord] = useState();
  const [filterCategories, setFilterCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statusModal, setStatusModal] = useState(false);

  const getCategories = async () => {
    await axios
      .get('http://localhost:3003/category')
      .then((response) => setCategories(response.data));
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setFilterCategories(
      categories.filter((category) => category.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterCategories(categories);
  }, [categories]);

  const listCategories = () => {
    if (categories.length === 0) {
      return <h1>Carregando...</h1>;
    }
    if (filterCategories.length === 0) {
      return <h1>Sem resultados...</h1>;
    }
    return filterCategories.map((category) => {
      if (category) {
        // eslint-disable-line
        const { _id } = category;
        return <CategoriesData category={category} getCategories={getCategories} key={_id} />;
      }
      return null;
    });
  };

  return (
    <Main>
      <Container>
        <Title>Categorias</Title>
        <Header>
          <Search>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={word}
              setWord={(value) => setWord(value)}
            />
          </Search>
          <Button>
            <TinyButton title="Nova Categoria" type="primary" click={() => setStatusModal(!statusModal)} />
          </Button>
        </Header>

        <ContentBox>
          <TableHeader>
            <TableTitle width={24}>
              <P>Nome</P>
            </TableTitle>
            <Bar />
            <TableTitle width={50}>
              <P>Descrição</P>
            </TableTitle>
            <Bar />
            <TableTitle width={24}>
              <P>Ult. Atualização</P>
            </TableTitle>
            <TableTitle width={2} />
          </TableHeader>

          {listCategories()}

          {statusModal ? <Modal tipo="Nova " nome="" cor="#000000" getCategories={getCategories} /> : null}
        </ContentBox>
      </Container>
    </Main>
  );
};

export default ListCategories;
