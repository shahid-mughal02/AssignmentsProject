module.exports = {
  content: [
    './public/*.html',
  ],
  theme: {
    extend: {
      fondFamily: {
        body: ["Poppins', sans-serif"]
      },
      colors: {
        logo: '#feaa25',
        title: '#242f51',
        desc: '#616368',
        btn: {
          bg: '#2500f9',
          text: '#fff'
        },
        own: {
          grey: '#f5f7fa'
        },
        footer: {
          bg: '#09142e',
          icons: '#273043'
        }
      },
      maxHeight: {
        img: '700px',
        small: '400px'
      }
    },
  },
  plugins: [],
}
