# Crypto Analytics Dashboard

A modern, feature-rich cryptocurrency analytics dashboard built with Next.js that provides real-time insights into the crypto market.

![Dashboard Preview](public/preview.png)

## 🌟 Features

- **Real-time Crypto Data**: Live data from CoinGecko API for cryptocurrencies and exchanges
- **Interactive Charts**: Visualize market trends and price movements
- **Customizable Dashboard**: Personalize your view with favorite coins and preferred layout
- **User Authentication**: Secure sign-up and login functionality
- **User Profiles**: Customize your experience with profile avatars and settings
- **Theme Support**: Toggle between dark and light modes
- **Responsive Design**: Seamless experience across all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crypto-dashboard.git
cd crypto-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **Data Fetching**: SWR/React Query
- **Charts**: Chart.js/Recharts
- **Authentication**: NextAuth.js
- **Database**: Prisma with PostgreSQL
- **API**: CoinGecko API

## 📱 Features in Detail

### Authentication
- Secure user registration and login
- Password recovery

### Dashboard
- Real-time cryptocurrency price tracking
- Market cap and volume information
- Historical price charts
- Exchange rate comparisons

### User Customization
- Save favourite cryptocurrencies
- Custom dashboard layouts
- Theme preferences (dark/light mode)
- Profile customisation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing the cryptocurrency data API
- [Next.js](https://nextjs.org/) for the amazing framework
- You for reading this far