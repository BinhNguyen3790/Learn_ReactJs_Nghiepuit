const styles = theme => ({
  boxTask: {
    display: 'flex',
    alignItem: 'center'
  },
  boxTask__item: {
    width: "33.3%",
    padding: "1rem",
  },
  title: {
    padding: theme.title.padding,
    border: theme.title.border,
    borderRadius: theme.title.borderRadius
  }

});

export default styles;