export default (doc) => {
  if (doc.type === 'blog_posts') {
      return `/blog/${doc.uid}`
  }
}
