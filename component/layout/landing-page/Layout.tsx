import Footer from "../../../modules/landingPage/components/Footer"

export interface ILandingPageLayout{
    children: React.ReactNode
}
export default function Layout({ children }: ILandingPageLayout) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}