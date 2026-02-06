import { render, screen } from '@testing-library/react';
import { SocialLinks } from '@/components/ui/social-links';

const mockLinks = [
  { platform: 'linkedin' as const, href: 'https://linkedin.com/in/test' },
  { platform: 'github' as const, href: 'https://github.com/test' },
];

describe('SocialLinks', () => {
  it('renders social links', () => {
    render(<SocialLinks links={mockLinks} />);
    
    expect(screen.getByLabelText(/visit linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/visit github/i)).toBeInTheDocument();
  });

  it('has proper security attributes', () => {
    render(<SocialLinks links={mockLinks} />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('has accessible ARIA labels', () => {
    render(<SocialLinks links={mockLinks} />);
    
    const linkedinLink = screen.getByLabelText(/visit linkedin/i);
    expect(linkedinLink).toBeInTheDocument();
  });
});
