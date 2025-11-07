# 🪙 Coincierge

<div align="center">

**Your personal cryptocurrency assistant** - Track, explore, and analyze cryptocurrencies with ease.

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.19-DB7093?logo=styled-components)](https://styled-components.com/)
[![Deployed on AWS](https://img.shields.io/badge/Deployed-AWS-232F3E?logo=amazon-aws)](https://aws.amazon.com/)

</div>

---

## 📖 Overview

Coincierge is a modern, elegant cryptocurrency tracking application built with React and TypeScript. Browse through the top cryptocurrencies, view detailed coin information, track real-time prices, and analyze market trends with interactive charts. The app features a beautiful dark theme with gold accents, providing a premium user experience for crypto enthusiasts.

## ✨ Features

- 📊 **Comprehensive Coin List** - Browse the top 100 cryptocurrencies with key metrics
- 💰 **Real-Time Price Tracking** - Live price updates every 5 seconds
- 📈 **Interactive Charts** - Visualize price trends with ApexCharts
- 📱 **Responsive Design** - Optimized for mobile and desktop experiences
- 🎨 **Beautiful UI** - Elegant dark theme with gold accents
- ⚡ **Fast Performance** - React Query caching for instant navigation
- 🔍 **Detailed Coin Information** - Rank, symbol, price, supply, and descriptions
- 🚀 **SEO Optimized** - React Helmet for dynamic meta tags

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.0** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe development
- **React Router DOM 5.3.4** - Client-side routing
- **Styled Components 6.1.19** - CSS-in-JS styling

### Data & State Management
- **React Query 3.39.3** - Server state management and caching
- **CoinPaprika API** - Cryptocurrency data source
- **OHLCV API** - Historical price data

### Visualization
- **ApexCharts 5.3.2** - Interactive charts and graphs
- **React ApexCharts 1.7.0** - React wrapper for ApexCharts

### Additional Tools
- **React Helmet 6.1.0** - Dynamic document head management
- **Create React App** - Build tooling and configuration

## 🚀 Getting Started

### Prerequisites

- **Node.js** 24.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/coincierge.git
   cd coincierge
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will automatically reload when you make changes

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner in interactive watch mode
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 📁 Project Structure

```
coincierge/
├── public/                 # Static assets
│   ├── img/               # Images (logo, home images)
│   └── index.html         # HTML template
├── src/
│   ├── routes/            # Route components
│   │   ├── Coins.tsx      # Coin list page
│   │   ├── Coin.tsx       # Individual coin detail page
│   │   ├── Chart.tsx      # Price chart component
│   │   └── Price.tsx      # Price statistics component
│   ├── api.ts             # API functions
│   ├── App.tsx            # Main app component
│   ├── Router.tsx         # Route configuration
│   ├── theme.ts           # Theme configuration
│   └── index.tsx          # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD pipeline
└── package.json           # Dependencies and scripts
```

## 🔌 API Integration

Coincierge uses the following APIs:

- **CoinPaprika API** - Fetches coin information, tickers, and market data
  - Endpoint: `https://api.coinpaprika.com/v1`
  - Used for: Coin list, coin info, ticker data

- **OHLCV API** - Fetches historical price data for charts
  - Endpoint: `https://ohlcv-api.nomadcoders.workers.dev`
  - Used for: Price history and chart visualization

## 🎨 Theme

The app features a sophisticated dark theme:

- **Background**: `#121212` - Deep dark background
- **Text**: `#F9F9F9` - Light text for contrast
- **Accent**: `#CFAE5B` - Elegant gold accent color
- **Typography**: 
  - Headers: `Cinzel` (elegant serif)
  - Body: `Source Sans Pro` (clean sans-serif)

## 🚢 Deployment

Coincierge is deployed on **AWS S3** with **CloudFront** CDN for optimal performance.

### Deployment Process

The app uses GitHub Actions for automated deployment:

1. **Trigger**: Push to `main` branch
2. **Build**: Compiles React app for production
3. **Deploy**: Uploads to S3 bucket (`coincierge-app`)
4. **Cache Invalidation**: Clears CloudFront cache

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to S3 (requires AWS CLI configuration)
aws s3 sync build/ s3://coincierge-app --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [CoinPaprika](https://coinpaprika.com/) for providing the cryptocurrency API
- [Nomad Coders](https://nomadcoders.co/) for the OHLCV API
- The React and open-source community

---

<div align="center">

**Built with ❤️ using React and TypeScript**

⭐ Star this repo if you find it helpful!

</div>
