
function Footer() {
    return (
        <footer className='page-footer font-small special-color-dark pt-4'>
            <div className='container'>
                <ul className='list-unstyled list-inline text-center'>
                    <li className='list-inline-item'>
                        <a
                        className='btn-floating btn-fb mx-1'
                        href='https://github.com/mcnairjm'
                        >
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footer-copyright text-center py-3'>
                @2022 Copyright:
                <a href='https://github.com/mcnairjm/react-portfolio'>
                    {' '}
                    John McNair
                </a>
            </div>
        </footer>
    );
}

export default Footer;