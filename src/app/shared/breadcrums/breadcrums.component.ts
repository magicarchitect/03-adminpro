import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {
  public titulo: string = '';
  public tituloSubs$: Subscription;

  constructor(private router: Router){
    this.tituloSubs$ = this.getArgumentosRuta()
      .subscribe( data => {
        console.log(data);
        this.titulo = data['titulo'];
        document.title = this.titulo;
      });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)      
    );
  }
}
