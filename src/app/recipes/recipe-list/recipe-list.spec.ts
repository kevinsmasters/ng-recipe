import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeList } from './recipe-list';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('RecipeList', () => {
  let component: RecipeList;
  let fixture: ComponentFixture<RecipeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [RecipeList],
      imports: [
        CommonModule,
        RecipeList
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeList);
    component = fixture.componentInstance;
    component.recipes = [
      { id: 1, title: 'Pasta', description: 'A simple tomato pasta' },
      { id: 2, title: 'Pancakes', description: 'Fluffy and delicious' },
    ];
    fixture.detectChanges();
  });

  it('should display a list of recipe titles and descriptions', () => {
    const cards = fixture.debugElement.queryAll(By.css('[data-testid="recipe-card"]'));
    expect(cards.length).toBe(2);

    const firstTitle = cards[0].nativeElement.textContent;
    expect(firstTitle).toContain('Pasta');
    expect(firstTitle).toContain('A simple tomato pasta');

    const secondTitle = cards[1].nativeElement.textContent;
    expect(secondTitle).toContain('Pancakes');
    expect(secondTitle).toContain('Fluffy and delicious');
  });
});
