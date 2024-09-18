import { Button, IconWrapper } from '../components/button';
import { Container } from '../components/container';
import { Hero, HeroSubtitle, HeroTitle } from '../components/hero';
import { HeroImage } from '../components/heroImage';
import { ChevronRightIcon } from '../components/icons/chevronRight';

export default function Homepage() {
    return (
        <Container className="overflow-hidden py-[6.4rem]">
            <Hero>
                <Button
                    href="/"
                    variant="secondary"
                    size="small"
                    className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
                >
                    Linear 2022 Release – Built for scale <IconWrapper>→</IconWrapper>
                </Button>
                <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    Linear is a better way
                    <br className="hidden md:block" /> to build products
                </HeroTitle>
                <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    Meet the new standard for modern software development.
                    <br className="hidden md:block" /> Streamline issues, sprints, and product
                    roadmaps.
                </HeroSubtitle>
                <Button
                    href="/"
                    variant="primary"
                    size="large"
                    className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
                >
                    Get Started{' '}
                    <IconWrapper>
                        <ChevronRightIcon />
                    </IconWrapper>
                </Button>
                <HeroImage />
            </Hero>
        </Container>
    );
}
