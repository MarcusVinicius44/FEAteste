import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';
import BannerBackground from '../Assets/home-banner-image.png';

// Teste da imagem do Banner Background
test('Banner background image is displayed', () => {
    render(<Home />);
    const bannerImage = screen.getByRole('img', { name: /imagemdefundo/i });
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage).toHaveAttribute('src', BannerBackground);
  });
  

// Teste do Texto do Banner
test('Banner text is displayed correctly', () => {
  render(<Home />);
  const primaryText1 = screen.getByText(/Desfrute refeições de restaurantes, padarias e produtos frescos de hortifrutis. Una-se ao movimento contra o desperdício de alimentos. Faça a diferença no meio ambiente e economize. Escolha sustentabilidade!/i);
  const primaryText2 = screen.getByText(/Junte-se a nós na missão de combater o desperdício de alimentos! Seja um parceiro do nosso site e ajude a resgatar alimentos que seriam desperdiçados, promovendo o bem-estar e a sustentabilidade./i);
  expect(primaryText1).toBeInTheDocument();
  expect(primaryText2).toBeInTheDocument();
});

// Teste do Botão
test('Seja parceiro button is displayed', () => {
  render(<Home />);
  const sejaParceiroButton = screen.getByRole('button', { name: /Seja parceiro/i });
  expect(sejaParceiroButton).toBeInTheDocument();
});

