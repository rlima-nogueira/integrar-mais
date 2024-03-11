import { Component } from '@angular/core';
import { faLocationDot, faBrain, faBookAtlas, faPuzzlePiece, faHammer} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integrar-mais';

  public icons = {faLocationDot, faBrain, faBookAtlas, faPuzzlePiece, faHammer};
}
