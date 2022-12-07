import { render, screen } from "utils/test-utils";
import { Header } from "components";
import user from "@testing-library/user-event";

describe("header component", () => {
  it("contains the logo", () => {
    render(<Header />);
    const Logo = screen.getByRole("img", { name: /designo dark logo/i });
    expect(Logo).toBeInTheDocument();
  });

  describe("desktop navigation and menu", () => {
    it("contains company link", () => {
      render(<Header />);
      const companyLink = screen.getByRole("link", { name: /our company/i });
      expect(companyLink).toBeInTheDocument();
    });
    it("contains location link", () => {
      render(<Header />);
      const locationLink = screen.getByRole("link", { name: /locations/i });
      expect(locationLink).toBeInTheDocument();
    });
    it("contains contact link", () => {
      render(<Header />);
      const contactLink = screen.getByRole("link", { name: /contact/i });
      expect(contactLink).toBeInTheDocument();
    });
  });

  describe("mobile navigation and menu", () => {
    it("contains open menu button", () => {
      render(<Header />);
      // const openMenuButton = screen.getByLabelText("open menu");
      const openMenuButton = screen.getByRole("button", {
        name: /open menu/i,
      });
      expect(openMenuButton).toBeInTheDocument();
    });

    it("must not contain close menu button on initial render", () => {
      render(<Header />);
      // const closeMenuButton = screen.queryByLabelText("close menu");
      const closeMenuButton = screen.queryByRole("button", {
        name: /close menu/i,
      });
      expect(closeMenuButton).not.toBeInTheDocument();
    });

    describe("renders mobile nav on open menu click", () => {
      // beforeEach(() => {
      //   // eslint-disable-next-line testing-library/no-render-in-setup
      //   render(<Header />);

      //   const openMenuButton = screen.getByRole("button", {
      //     name: /open menu/i,
      //   });
      //   user.click(openMenuButton);
      // });

      it("contains dialog modal", async () => {
        user.setup();
        render(<Header />);
        const openMenuButton = screen.getByRole("button", {
          name: /open menu/i,
        });
        await user.click(openMenuButton);
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
      });

      it("contains mobile nav", () => {
        render(<Header />);
        const openMenuButton = screen.getByRole("button", {
          name: /open menu/i,
        });
        user.click(openMenuButton);
        const mobileNav = screen.getByRole("navigation", {
          name: /mobile nav/i,
        });
        expect(mobileNav).toBeInTheDocument();
      });

      it("contains mobile menu list", () => {
        render(<Header />);
        const openMenuButton = screen.getByRole("button", {
          name: /open menu/i,
        });
        user.click(openMenuButton);
        const deskList = screen.getByRole("list", {
          name: /mobile list/i,
        });
        expect(deskList).toBeInTheDocument();
      });

      it("contains mobile menu list items", () => {
        render(<Header />);
        const openMenuButton = screen.getByRole("button", {
          name: /open menu/i,
        });
        user.click(openMenuButton);
        const deskListItems = screen.getAllByRole("listitem", {
          name: /mobile listitem/i,
        });
        expect(deskListItems).toHaveLength(3);
        deskListItems.forEach((listItem) =>
          expect(listItem).toBeInTheDocument()
        );
      });

      it("closes the dialog modal", () => {
        render(<Header />);
        const openMenuButton = screen.getByRole("button", {
          name: /open menu/i,
        });
        user.click(openMenuButton);
        const closeMenuButton = screen.getByRole("button", {
          name: /close menu/i,
        });
        user.click(closeMenuButton);

        const dialog = screen.queryByRole("dialog");
        expect(dialog).not.toBeInTheDocument();

        const mobileNav = screen.queryByRole("navigation", {
          name: /mobile nav/i,
        });
        expect(mobileNav).not.toBeInTheDocument();

        const deskList = screen.queryByRole("list", {
          name: /mobile list/i,
        });
        expect(deskList).not.toBeInTheDocument();

        const deskListItems = screen.queryAllByRole("listitem", {
          name: /mobile listitem/i,
        });
        deskListItems.forEach((listItem) =>
          expect(listItem).not.toBeInTheDocument()
        );
      });
    });
  });
});
