import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonComponent } from "./components/pokemon/pokemon.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "pokemons",
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
