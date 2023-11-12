import { Component } from 'react';

import { Container } from './Container/Container.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'api/pixabay-service';

export class App extends Component {
  state = {
    galleryItems: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (!query) {
      return;
    }

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: false });
        const data = await fetchImages(query, page);
        const totalHits = data.total;
        const images = data.hits;
        this.setState({ galleryItems: [...prevState.galleryItems, ...images] });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  submitSearch = newQuery => {
    this.setState({
      galleryItems: [],
      query: newQuery,
      page: 1,
    });
  };

  increasePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { galleryItems, query, page } = this.state;
    return (
      <Container>
        <Searchbar onSubmitSearch={this.submitSearch} />
        {galleryItems.length > 0 && <ImageGallery images={galleryItems} />}
        {/* <Loader /> */}

        <Button onLoadMoreBtn={this.increasePage} />
      </Container>
    );
  }
}
