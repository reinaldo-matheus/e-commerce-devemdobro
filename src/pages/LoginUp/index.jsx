import { Container } from "../../styles/globals"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Form, Input, Button, Checkbox } from "./styles"
import { CopyRight } from './../../components/CopyRight';

export const LoginUp = () => {
    return (
        <>

                <Header />
            <Container>
                <h1>Minha conta</h1>
                <Form>
                    <h2>Entrar</h2>
                    <label>Nome de usuário ou e-mail</label>
                    <Input type="email" placeholder="e-mail@email.com" />
                    <label>Senha</label>
                    <Input type="password" />
                    <Checkbox>
                        <input type="checkbox" /> Manter conectado
                    </Checkbox>
                    <Button type="submit">Entrar</Button>
                    <a href="#">Recuperar sua senha</a>
                </Form>
                <Form>
                    <h2>Cadastrar-se</h2>
                    <label>Nome de usuário ou e-mail</label>
                    <Input type="email" placeholder="e-mail@email.com" />
                    <label>Senha</label>
                    <Input type="password" />
                    <p>Seus dados pessoais serão usados para aprimorar sua experiência neste site...</p>
                    <Button type="submit">Cadastrar-se</Button>
                </Form>
            </Container>
            <Footer />
            <CopyRight />
        </>
    );
};