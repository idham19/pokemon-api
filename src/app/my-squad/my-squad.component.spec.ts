import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; 

import { MySquadComponent } from './my-squad.component';
import { of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

describe('MySquadComponent', () => {
  let component: MySquadComponent;
  let fixture: ComponentFixture<MySquadComponent>;
  let mockPokemonService: jasmine.SpyObj<PokemonService>;

  const mockSquad = [
    { name: 'pikachu' },
    { name: 'charizard' },
    { name: 'bulbasaur' },
  ]; 
 

  beforeEach(() => {
    mockPokemonService = jasmine.createSpyObj('PokemonService', ['removeFromSquad']);
    mockPokemonService.squad$ = of(mockSquad); 
    TestBed.configureTestingModule({
      declarations: [MySquadComponent],
      providers: [
        { provide: PokemonService, useValue: mockPokemonService }, 
      ],
    });
    fixture = TestBed.createComponent(MySquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //added test 
  it('should display the squad length', () => {
    const squadLengthElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(squadLengthElement.textContent).toContain('My squad (3)');
  });
  it('should display the "BATTLE" button when the squad has 3 or more Pokémon', () => {
    const battleButton = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(battleButton.textContent).toContain('BATTLE');
  });
  it('should call removeFromSquad when the "Remove" button is clicked', () => {
    const removeButton = fixture.debugElement.query(By.css('.bg-red-500')).nativeElement;
    removeButton.click();

    expect(mockPokemonService.removeFromSquad).toHaveBeenCalledWith(mockSquad[0]);
  });
});
