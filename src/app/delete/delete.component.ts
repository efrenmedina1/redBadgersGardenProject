import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }


  ngOnInit() {

  }

  delete(id) {

    fetch(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: sessionStorage.getItem('token')
      })
    }).then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(error => console.error('you got an error', error))
  }

}
