import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LineaTemporalComponent } from '../components/linea_temporal/linea_temporal.component';
import { HeroComponent } from '../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [LineaTemporalComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
