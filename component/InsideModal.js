import Link from 'next/link'

export default function InsideModal() {
  return (
    <div>
      <b>Welcome to DAPER House gents,</b> <br></br>
      <br />
      <div dangerouslySetInnerHTML={{ __html: textChat }}></div>
      <div>
        {' '}
        <button> About </button>
        <button> Join Club</button>
      </div>
    </div>
  )
}
