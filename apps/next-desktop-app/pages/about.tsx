function About({ post }) {
  console.log('--- post:', post);
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
