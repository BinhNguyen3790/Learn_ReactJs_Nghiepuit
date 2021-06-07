import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div className='container'>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>Not Found Page</strong>
        </div>

        <script>
          $(".alert").alert();
        </script>
      </div>
    )
  }
}

export default NotFoundPage;