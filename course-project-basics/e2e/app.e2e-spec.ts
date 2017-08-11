import { CourseProjectBasicsPage } from './app.po';

describe('course-project-basics App', () => {
  let page: CourseProjectBasicsPage;

  beforeEach(() => {
    page = new CourseProjectBasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
