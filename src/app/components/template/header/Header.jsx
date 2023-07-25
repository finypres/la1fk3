import Menu from "./Menu";
import Top from "./Top";

export default function Header() {
  return (
    <header
      id="header"
      className="header-transparent"
      data-plugin-options="{'stickyScrollUp': true, 'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 42, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body header-body-bottom-border border-top-0 h-auto">
        <div className="header-container container p-static">
          <div className="header-row">
            <Top/>
            <Menu/>
          </div>
        </div>
      </div>
    </header>
  )
}
