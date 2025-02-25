import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonService } from '../pokemon.service';
import { By } from '@angular/platform-browser';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let mockPokemonService: jasmine.SpyObj<PokemonService>;

  const mockPokemon = {
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
  };

  beforeEach(async () => {
    // Create a spy object for PokemonService
    mockPokemonService = jasmine.createSpyObj('PokemonService', ['addToSquad']);

    await TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      providers: [
        { provide: PokemonService, useValue: mockPokemonService }, // Provide the mock service
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;


    component.pokemon = mockPokemon;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//added test
  it('should display the Pokémon name', () => {
    const pokemonNameElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(pokemonNameElement.textContent).toContain(mockPokemon.name);
  });

  it('should display the Pokémon image', () => {
    const pokemonImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(pokemonImageElement.src).toBe('https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg');
  });

  it('should call addToSquad when the "Add" button is clicked', () => {
    const addButton = fixture.debugElement.query(By.css('button')).nativeElement;
    addButton.click();

    expect(mockPokemonService.addToSquad).toHaveBeenCalledWith(mockPokemon);
  });

  it('should render the Pokémon URL in the description', () => {
    const descriptionLink = fixture.debugElement.query(By.css('.description a')).nativeElement;
    expect(descriptionLink.href).toBe(mockPokemon.url);
  });
});