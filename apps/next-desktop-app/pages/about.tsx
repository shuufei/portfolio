function About({ post }) {
  return <div>About</div>
}

export async function getStaticProps() {
  return {
    props: {
      post: {
        id: 'test-id',
        title: 'test-title'
      }
    }
  }
}

export default About;
