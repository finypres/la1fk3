import Image from 'next/image'

export default function SvgFirst() {
  return (
    <div className="col-lg-5 text-end p-relative pt-5 max-width-custom-1">
      <div className="p-absolute right-0">
        <div
          data-plugin-float-element=""
          data-plugin-options="{'startPos': 'top', 'speed': 10.0, 'transition': true, 'transitionDuration': 1000}"
        >
          <Image
            width={350}
            height={331}
            src="/img/demos/business-consulting-5/svg/icon-bg-1.svg"
            alt=""
            data-icon=""
            data-plugin-options="{'onlySVG': true, 'extraClass': ''}"
          />
        </div>
      </div>
      <div
        data-plugin-float-element=""
        data-plugin-options="{'startPos': 'bottom', 'speed': 10.0, 'transition': true, 'transitionDuration': 1000}"
      >
        <Image
          width={256}
          height={230}
          src="/img/demos/business-consulting-5/svg/icon-1.svg"
          alt=""
          data-icon=""
          data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary mt-5 pt-5'}"
        />
      </div>
    </div>
  )
}
