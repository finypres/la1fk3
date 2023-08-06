const API = process.env.NEXT_PUBLIC_API_URL
const VERSION = process.env.NEXT_PUBLIC_API_VERSION

const endPoints = {
  mail: {
    send: `${API}/api/${VERSION}/mail/send`
  }
}

export default endPoints