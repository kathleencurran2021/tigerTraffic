const width = {
  mobileDefault: '375px',
  mobileIosTen: '375px',
  mobileSTen: '360px',
}

const height = {
  mobileDefaultHeight: '667px',
  mobileIosTenHeight: '812px',
  mobileSTenHeight: '760px',
}

const tryin = '@media (width: 360px) and (height: 812)'

export const device = {
  mobileDefault: `(min-width: ${width.mobileDefault}) and (min-height: ${height.mobileDefaultHeight})`,
  mobileIosTen: `(min-width: ${width.mobileIosTen}) and (min-height: ${height.mobileIosTenHeight})`,
  mobileSTen: `(min-width: ${width.mobileSTen}) and (min-height: ${height.mobileSTenHeight})`,
}
