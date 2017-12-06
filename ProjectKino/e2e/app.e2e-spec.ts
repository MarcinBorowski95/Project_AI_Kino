import { ProjectKinoPage } from './app.po';

describe('project-kino App', () => {
  let page: ProjectKinoPage;

  beforeEach(() => {
    page = new ProjectKinoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
