
function Footer() {
    return (
        <footer class='page-footer fixed-bottom font-small special-color-dark pt-4'>
            <div class='container'>
                <ul class='list-unstyled list-inline text-center'>
                    <li class='list-inline-item'>
                        <a
                        class='btn-floating btn-fb mx-1'
                        href='https://github.com/mcnairjm'
                        >
                            <i class='fab fa-github'></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class='footer-copyright text-center py-3'>
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